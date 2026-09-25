import{test,expect} from "@playwright/test"
 test.beforeAll("Before all",async()=>{
    console.log(" before all");
    
 })
 test.afterAll("After All",async()=>{
        console.log("After all:");
        
    })

    test.afterEach("After Each",async()=>{
        console.log("After Each:");
        
    })

    test.beforeEach("Before Each",async()=>{
        console.log("before Each:");
        
    })


    test("test1",async()=>{
        console.log("test1");
        
    })
     test("test2",async()=>{
        console.log("test2");
        
    })
     test("test3",async()=>{
        console.log("test3");
        
    })
     test("test4",async()=>{
        console.log("test4");
        
    })
    
