import { Persistency } from "./persistency"

/* SUT - System Under Test 
     CUT - Class Under Test
*/

describe("Persistency", () => {
     afterEach(() => jest.clearAllMocks())

     it("should return undefined", () => {
          const sut = new Persistency()
          expect(sut.saveOrder()).toBeUndefined()
     })

     it("should call console.log with 'Request saved successfully' ", () => {
          const sut = new Persistency()
          const consoleSpy = jest.spyOn(console, "log")
          sut.saveOrder()
          expect(consoleSpy).toHaveBeenCalledWith("Request saved successfully!")
     })

     it("should call console.log once", () => {
          const sut = new Persistency()
          const consoleSpy = jest.spyOn(console, "log")
          sut.saveOrder()
          expect(consoleSpy).toHaveBeenCalledTimes(1)
     })
})
