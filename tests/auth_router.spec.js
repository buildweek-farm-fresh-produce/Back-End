const request = require('supertest')
const server = require('../server.js')
const db = require('../data/dbConfig.js')

const farmerRegister = {
    username: 'local_farmer4',
    email: 'local_farmer4@gmail.com',
    password: 'password'
}

const consumerRegister = {
    username: 'local_consumer3',
    email: 'local_consumer3@gmail.com',
    password: 'password',
    city_id: 1,
    state_id: 1
}

describe('auth_router.js', () => {
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

    describe('POST /farmer/register', () => {
        it('returns 201 OK', async () => {
            let results = await request(server)
                .post('/api/auth/farmer/register').send(farmerRegister)
            expect(results.status).toBe(201)
        });
        it('creates new farmer user', async () => {
            let farmers = await db('user_farmer')

            expect(farmers).toHaveLength(0)
            await request(server)
                .post('/api/auth/farmer/register').send(farmerRegister)

            farmers = await db('user_farmer')

            expect(farmers).toHaveLength(1)

        });
    });

    describe('POST /farmer/login', () => {
        it('returns 200 OK w/ valid credentials',async () => {
            await request(server)
                .post('/api/auth/farmer/register').send(farmerRegister)


            const results = await request(server)
                .post('/api/auth/farmer/login').send({
                    username: farmerRegister.username,
                    password: farmerRegister.password
                })
            
            expect(results.status).toBe(200)
        });
        it('returns a token w/ valid credentials',async () => {
            await request(server)
                .post('/api/auth/farmer/register').send(farmerRegister)


            const results = await request(server)
                .post('/api/auth/farmer/login').send({
                    username: farmerRegister.username,
                    password: farmerRegister.password
                })
            
            expect(typeof(results.body.token)).toBe('string')
        });
        it('doesnt allow login with incorrect password',async () => {
            await request(server)
                .post('/api/auth/farmer/register').send(farmerRegister)


            const results = await request(server)
                .post('/api/auth/farmer/login').send({
                    username: farmerRegister.username,
                    password: 'wrong'
                })
            
            expect(results.body.token).toBeFalsy()
            expect(results.status).toBe(401)
        });
    });

    describe('POST /farmer/register', () => {
        it('returns 201 OK', async () => {
            let results = await request(server)
                .post('/api/auth/farmer/register').send(farmerRegister)
            expect(results.status).toBe(201)
        });
        it('creates new farmer user', async () => {
            let farmers = await db('user_farmer')

            expect(farmers).toHaveLength(0)
            await request(server)
                .post('/api/auth/farmer/register').send(farmerRegister)

            farmers = await db('user_farmer')

            expect(farmers).toHaveLength(1)

        });
    });

    describe('POST /shop/register', () => {
        it('returns 200 OK w/ valid credentials',async () => {
            await request(server)
                .post('/api/auth/shop/register').send(consumerRegister)


            const results = await request(server)
                .post('/api/auth/shop/login').send({
                    username: consumerRegister.username,
                    password: consumerRegister.password
                })
            
            expect(results.status).toBe(201)
        });
        it('returns a token w/ valid credentials',async () => {
            await request(server)
                .post('/api/auth/shop/register').send(consumerRegister)


            const results = await request(server)
                .post('/api/auth/shop/login').send({
                    username: consumerRegister.username,
                    password: consumerRegister.password
                })
            
            expect(typeof(results.body.token)).toBe('string')
        });
        it('doesnt allow login with incorrect password',async () => {
            await request(server)
                .post('/api/auth/shop/register').send(consumerRegister)


            const results = await request(server)
                .post('/api/auth/shop/login').send({
                    username: consumerRegister.username,
                    password: 'wrong'
                })
            
            expect(results.body.token).toBeFalsy()
            expect(results.status).toBe(400)
        });
    });
});