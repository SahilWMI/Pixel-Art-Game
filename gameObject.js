import { TILE_SIZE } from "./main.js";

export class Hero extends GameObject {
    constructor(){

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
