export SAMBA_USER=$SAMBA_USER
export SAMBA_PASSWORD=$SAMBA_PASSWORD
export SAMBA_SERVER=$SAMBA_SERVER

sudo -E mkdir /mnt/smbstorage
if [ ! -d "/etc/smbcredentials" ]; then
sudo -E mkdir /etc/smbcredentials
fi
if [ ! -f "/etc/smbcredentials/smb-starter.cred" ]; then
    sudo -E bash -c 'echo "username=$SAMBA_USER" >> /etc/smbcredentials/smb-starter.cred'
    sudo -E bash -c 'echo "password=$SAMBA_PASSWORD" >> /etc/smbcredentials/smb-starter.cred'
fi
sudo -E chmod 600 /etc/smbcredentials/smb-starter.cred

sudo -E bash -c 'echo "$SAMBA_SERVER /mnt/smbstorage cifs nofail,vers=3.0,credentials=/etc/smbcredentials/smb-starter.cred,dir_mode=0777,file_mode=0777,serverino" >> /etc/fstab'
sudo -E mount -t cifs "$SAMBA_SERVER" /mnt/smbstorage -o vers=3.0,credentials=/etc/smbcredentials/smb-starter.cred,dir_mode=0777,file_mode=0777,serverino
