const request = require('supertest');
const express = require('express');
const app = express();

describe('Health Check', () => {
  it('should return 200 for health check endpoint', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.text).toBe('OK');
  });
});
