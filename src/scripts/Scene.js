class Scene {
    constructor(){
        this.canvas = document.getElementById('scene');
        this.ctx = this.canvas.getContext('2d');
        this.ctx.canvas.height = window.innerHeight;
        this.ctx.canvas.width = window.innerWidth;
    }
}
export default Scene;