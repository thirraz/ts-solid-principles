import { Messaging } from "./messaging"

const createSUT = () => {
     return new Messaging()
}

/* SUT - System Under Test 
     CUT - Class Under Test
*/

describe("Messaging", () => {
     afterEach(() => jest.clearAllMocks())

     it("should return undefined", () => {
          const sut = createSUT()
          expect(sut.sendMessage("teste")).toBeUndefined()
     })

     it("should call console.log once", () => {
          const sut = createSUT()
          const consoleSpy = jest.spyOn(console, "log")
          sut.sendMessage("teste")
          expect(consoleSpy).toHaveBeenCalledTimes(1)
     })
     it("should call console.log with 'Your message has been sent!  and msg param'", () => {
          const sut = createSUT()
          const consoleSpy = jest.spyOn(console, "log")
          sut.sendMessage("teste")
          expect(consoleSpy).toHaveBeenCalledWith(
               "Your message has been sent! (teste)",
          )
     })
})
