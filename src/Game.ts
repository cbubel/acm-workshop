import { Food } from './Food';
import { Player } from './Player';

export class Game {
    private static readonly startingFoodCount: number = 50;
    public static readonly gameboardSize: number = 500;

    private player: Player;
    private foods: Food[];
    public gameboard: HTMLElement;

    constructor() {
        this.foods = this.createFood(Game.startingFoodCount);
        this.player = new Player(this.checkCollision.bind(this));
        this.gameboard = document.getElementById('gameboard');

        this.render();
    }

    createFood(count: number): Food[] {
        const foods: Food[] = [];

        for (let i = 0; i < count; i++) {
            foods.push(new Food(`food_${i}`));
        }

        return foods;
    }

    checkCollision(): void {
        for (let i = 0; i < this.foods.length; i++) {
            let food: Food = this.foods[i];

            if (this.player.x <= food.x &&
                this.player.x + this.player.size >= food.x + food.size &&
                this.player.y <= food.y &&
                this.player.y + this.player.size >= food.y + food.size) {

                this.tryEat(i);
                return;
            }
        }
    }

    tryEat(foodIndex: number): void {
        const canEat = this.player.eat(this.foods[foodIndex].size);

        if (canEat) {
            this.gameboard.removeChild(this.foods[foodIndex].element);
            this.foods.splice(foodIndex, 1);
        }
    }

    render(): void {
        this.foods.forEach(food => this.gameboard.appendChild(food.element));
        this.gameboard.appendChild(this.player.element);
    }
}