describe('Shop functional test',()=>{
    describe('create a new Shop',()=>{
        it('should create a Shop with sucess',async()=>{
            const newShop ={
                name:'Test Shop',
                classification:'Bar & Restaurants',
                active: true,
                internalCode:'TeSh01',
                level:1,
                address:{
                    street:'calle melancolia',
                    number:55,
                    neighborhood:'barrio de la tristeza',
                    postalCode:'29090-640',
                    city:'Ciudad',
                    UF:'Estado',
                    country:'Brasil',
                },
                contactData:[
                    {
                        type:'phone',
                        value:'99999999999',
                        name:'ShopPhone'
                    },
                    {
                        type:'email',
                        value:'email@email.com',
                        name:'emailShop'
                    },
                    {
                        type:'person',
                        value:'Fulano',
                        position:'owner',
                        use: 'emailShop'
                    }
                ],
                createdDate:'05/01/2020',
                updatedDate:'05/01/2020',  
            }
            const response = await global.testRequest.post('/api/shops').send(newShop);
            expect(response.status).toBe(201)
            expect(response.body).toEqual(expect.objectContaining(newShop))
        });
    });
});