import { fireEvent,render,screen } from "@testing-library/dom";
import Userr from "./Userr";
import server from  

beforeAll(()=>{
     server.listen();

})

afterAll(()=>{
     server.close()
})

afterEach(()=>{
     server.restHandlers()
})

test('get userr',async()=>{
     render(<Userr/>)
          const userList=await screen.finallByeRole('listitems')
          expect(UserrList).toHaveLength(7)
  
});