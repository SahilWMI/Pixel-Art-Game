import {TILE_SIZE} from "../main.js"

export class GameObject {
    constructor(){

    }
    draw(ctx){
        ctx.fillRect(
            0,
            0,
            TILE_SIZE,
            TILE_SIZE
        )
    }
}
