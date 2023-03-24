import { Router } from "express";
import { createUser, deleteUser, fetchUsers, getUserById, updateUser } from "../controllers/user.js";

const router = Router();

router.get('/fetchUsers', fetchUsers)
router.get('/user/:id', getUserById)
router.post('/createUser', createUser)
router.delete('/user/delete/:id', deleteUser)
router.patch('/user/update/:id', updateUser)

export default router