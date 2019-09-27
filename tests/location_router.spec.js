const request = require('supertest')
const server = require('../server.js')
const db = require('../data/dbConfig.js')


describe('location_router.js', () => {
    beforeEach(async () => {
        await db('farm_upgrade').truncate();
        await db('farm_tool').truncate();
        await db('tool').truncate();
        await db('tool_category').truncate();
        await db('order_item').truncate();
        await db('order').truncate();
        await db('produce_item').truncate();
        await db('produce_category').truncate();
        await db('consumer_user').truncate();
        await db('farm').truncate();
        await db('user_farmer').truncate();
        await db('state').truncate();
        await db('city').truncate();
    });

    describe('GET /states', () => {
        it('returns 200 OK', () => {
            request(server)
                .get('/api/locations/states')
                .then(results => {
                    expect(results).toBeTruthy();
                    expect(results.status).toBe(200)
                });
        });
        it('returns array of state objects', () => {
            return request(server)
                .get('/api/locations/states')
                .then(results => {
                    expect(results.body.states).toHaveLength(0)
                })

        });
    });

    describe('GET /cities', () => {
        it('returns 200 OK', () => {
            request(server)
                .get('/api/locations/cities')
                .then(results => {
                    expect(results).toBeTruthy();
                    expect(results.status).toBe(200)
                });
        });
        it('returns array of state objects', () => {
            return request(server)
                .get('/api/locations/cities')
                .then(results => {
                    expect(results.body.cities).toHaveLength(0)
                })

        });
    });
});