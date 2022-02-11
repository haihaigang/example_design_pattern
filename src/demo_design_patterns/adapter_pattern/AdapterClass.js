import Adaptee from "./Adaptee.js";

class AdapterClass extends Adaptee {
    fly() {
        this.flyWithWing()
    }
}

export default AdapterClass