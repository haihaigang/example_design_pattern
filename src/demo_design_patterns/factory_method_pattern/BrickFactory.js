class BrickFactory {
    createBrick() {
        throw new Error('abstract method can not call')
    }
}

export default BrickFactory