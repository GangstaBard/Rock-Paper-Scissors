function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const app = Vue.createApp({
  data() {
    return {
      winner: "",
      computerWins: 0,
      userWins: 0,
      currentRound: 0,
      currentUserWeapon: "",
      currentComputerWeapon: "",
    };
  },
  methods: {
    chooseWeapon(event) {
      targetId = event.currentTarget.id;
      console.log(targetId);

      this.currentUserWeapon = targetId;
      console.log("Current weapon" + " " + this.currentUserWeapon);

      this.computerChooseWeapon();
    },
    computerChooseWeapon() {
      const val = randomValue(1, 3);

      if (val == 1) {
        this.currentComputerWeapon = "rock";
      } else if (val == 2) {
        this.currentComputerWeapon = "paper";
      } else {
        this.currentComputerWeapon = "scissors";
      }
      console.log("Current comp weapon - " + this.currentComputerWeapon);

      this.calculateResult();
    },
    reset() {
      this.currentComputerWeapon = "";
      this.currentUserWeapon = "";
      this.currentRound++;
    },
    calculateResult() {
      if (
        this.currentUserWeapon === "rock" &&
        this.currentComputerWeapon === "scissors"
      ) {
        console.log("You win");
        this.userWins = this.userWins + 1;
        this.reset();
      } else if (
        this.currentUserWeapon === "scissors" &&
        this.currentComputerWeapon === "paper"
      ) {
        console.log("You win");
        this.userWins = this.userWins + 1;
        this.reset();
      } else if (
        this.currentUserWeapon === "paper" &&
        this.currentComputerWeapon === "rock"
      ) {
        console.log("You win");
        this.userWins = this.userWins + 1;
        this.reset();
      } else if (
        this.currentComputerWeapon === "rock" &&
        this.currentUserWeapon === "scissors"
      ) {
        console.log("You lose");
        this.computerWins = this.computerWins + 1;
        this.reset();
      } else if (
        this.currentComputerWeapon === "scissors" &&
        this.currentUserWeapon === "paper"
      ) {
        console.log("You lose");
        this.computerWins = this.computerWins + 1;
        this.reset();
      } else if (
        this.currentComputerWeapon === "paper" &&
        this.currentUserWeapon === "rock"
      ) {
        console.log("You lose");
        this.computerWins = this.computerWins + 1;
        this.reset();
      } else {
        console.log("It's a tie");
        this.reset();
      }

      this.checkWiner();
    },
    checkWiner() {
      if ((this.currentRound == 4) & (this.userWins == this.computerWins)) {
        this.winner = "It's a tie!";
      } else if (
        (this.currentRound == 4) &
        (this.userWins > this.computerWins)
      ) {
        this.winner = "You win!";
      } else if (
        (this.currentRound == 4) &
        (this.userWins < this.computerWins)
      ) {
        this.winner = "Oh no you lose";
      }
    },
  },
});

app.mount("#app");
