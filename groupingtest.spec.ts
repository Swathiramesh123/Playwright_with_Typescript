import{test,expect} from "@playwright/test"
test.describe("Group1",async()=>{
    test("test1",async ()=>{
        console.log("test1");
        
    })
     test("test2",async ()=>{
        console.log("test2");
        
    })
})
test.describe("Group2",async()=>{
     test("test3",async ()=>{
        console.log("test3");
        
    })
     test("test4",async ()=>{
        console.log("test4");
        
    })
})
