import { PersistencyProtocol } from "../classes/interfaces/persistency-protocol"

//persistency is a way to save an information
export class Persistency implements PersistencyProtocol {
     saveOrder(): void {
          console.log("Request saved successfully!")
     }
}
