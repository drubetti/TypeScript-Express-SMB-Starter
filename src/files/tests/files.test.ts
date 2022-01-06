import request from 'supertest';
import app from '../../app';

describe('Files API', () => {
  test('Should list files (dummy test)', async () => {
    const { status } = await request(app).get('/files/list');
    expect(status).toBeTruthy();
  });
});
