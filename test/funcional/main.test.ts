
describe('run base test for configuration validation',()=>{
    it('return sucess',async()=>{
        const {body, status} = await global.testRequest.get('/status');
        expect(status).toBe(200);
        expect(body).toEqual({data:'All Good!'});
    })
});