import { User } from '../models/index.js';

const userController = {};

userController.getAll = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
};

userController.getById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findOne({
            where: {
                id,
            },
        });
        res.json(user);
    } catch (error) {
        console.log(error);
    }
};

userController.register = async (req, res) => {
    const { body } = req;
    try {
        const newUser = await User.create(body);
        res.json({
            ...newUser.dataValues,
            password: undefined,
        });
    } catch (error) {
        console.log(error);
    }
};

userController.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                email,
                password,
            },
        });
        if (user) {
            res.json({
                ...user.dataValues,
                password: undefined,
            });
        }
        res.json({ message: 'Invalid credentials' });
    } catch (error) {
        console.log(error);
    }
};

userController.update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        await User.update(body, {
            where: {
                id,
            },
        });
        res.json({ message: 'User updated' });
    } catch (error) {
        console.log(error);
    }
};

userController.delete = async (req, res) => {
    const { id } = req.params;
    try {
        await User.destroy({
            where: {
                id,
            },
        });
        res.json({ message: 'User deleted' });
    } catch (error) {
        console.log(error);
    }
};

export default userController;
