import { TILE_SIZE } from "./main.js";

export class GameObject {
    constructor({game, 
                sprite, 
                position,
                scale }
            ){
                this.game = game;
                this.sprite = sprite;
                this.position = position;
                this.scale = scale;

    }
    draw(ctx){
        ctx.fillRect(
            1 * TILE_SIZE,
            2 * TILE_SIZE,
            TILE_SIZE,
            TILE_SIZE
        )
    }
}
