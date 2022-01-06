import SambaClient from 'samba-client';

const { SAMBA_SERVER, SAMBA_USER, SAMBA_PASSWORD } = process.env;

if (!SAMBA_SERVER || !SAMBA_USER || !SAMBA_PASSWORD) {
  throw new Error('Required SMB configuration is missing!');
}

export default new SambaClient({
  address: SAMBA_SERVER,
  username: SAMBA_USER,
  password: SAMBA_PASSWORD,
  maskCmd: true,
});
