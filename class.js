class Block {
    constructor(x, y, z, type) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.type = type;
        switch (type) {
            case 'Blue1':
                this.resources = blockResources.BlockBlue1;
                break;
            case 'Blue2':
                this.resources = blockResources.BlockBlue2;
                break;
            case 'Green1':
                this.resources = blockResources.BlockGreen1;
                break;
            case 'Green2':
                this.resources = blockResources.BlockGreen2;
                break;
            case 'Yellow1':
                this.resources = blockResources.BlockYellow1;
                break;
            case 'Yellow2':
                this.resources = blockResources.BlockYellow2;
                break;
            case 'Pink1':
                this.resources = blockResources.BlockPink1;
                break;
            case 'Pink2':
                this.resources = blockResources.BlockPink2;
                break;
        }
    }
    getColor(side, ...pos) {
        pos = pos.map(x => x.toString(16).toUpperCase());
        return this.resources.Palette[this.resources.Map[pos.join('')]];
    }
}