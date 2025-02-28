export class Order {
    constructor(sFrom) {
      this.OrderState = {
        WELCOMING: () => {
          let aReturn = [];
          this.stateCur = this.OrderState.RESERVING;
          aReturn.push("Welcome to UX Eatery");
          aReturn.push("What would you like to order?");
          aReturn.push("1: Udon");
          aReturn.push("2: Ramen");
          aReturn.push("3: Soba");
          return aReturn;
        },
        RESERVING: (sInput) => {
          let aReturn = [];
          //First order
          if (sInput =1) {
            aReturn.push(`Ramen has been ordered under the phone number ${this.sFrom}`);
            let d = new Date();
            d.setMinutes(d.getMinutes() + 120);
            aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
            //Second order
          } else if (sInput =2) {
            aReturn.push(`Udon has been ordered under the phone number ${this.sFrom}`);
            let d = new Date();
            d.setMinutes(d.getMinutes() + 120);
            aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
          //Third order
          } else if (sInput =3) {
            aReturn.push(`Soba has been ordered under the phone number ${this.sFrom}`);
            let d = new Date();
            d.setMinutes(d.getMinutes() + 120);
            aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
          } else {
            aReturn.push("Thanks for trying our order system");
            aReturn.push("Maybe next time");
          }
          return aReturn;
        },

        //Upsell
    Upsell: (sInput) => {
      let aReturn = [];
      //First order
      if (sInput =4) {
        aReturn.push(`Sushi has been ordered under the phone number ${this.sFrom}`);
        let d = new Date();
        d.setMinutes(d.getMinutes() + 120);
        aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
      //Second order
      }else if (sInput =5) {
        aReturn.push(`Popcorn Chicken has been ordered under the phone number ${this.sFrom}`);
        let d = new Date();
        d.setMinutes(d.getMinutes() + 120);
        aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
      //Third order
       }else if (sInput =6) {
        aReturn.push(`Dumplings has been ordered under the phone number ${this.sFrom}`);
        let d = new Date();
        d.setMinutes(d.getMinutes() + 120);
        aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
      } else {
        aReturn.push("Thanks for trying our order system");
        aReturn.push("Maybe next time");
      }
      return aReturn;
    }
      };
  
      this.stateCur = this.OrderState.WELCOMING;
      this.isDone = false;
      this.sFrom = sFrom;
    }


    handleInput(sInput) {
      return this.stateCur(sInput);
    }
    isDone() {
      return this.isDone;
    }
  }