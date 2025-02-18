import axiosInstance from "../axios";
import LoginManager from "core/auth/loginManager";
import { createLoginManagerInstance } from "core/auth/loginManagerImpl";
import EmailLoginItem from "./emailLoginItem";

const loginManager: LoginManager = createLoginManagerInstance();
loginManager.register(new EmailLoginItem(axiosInstance));
export default loginManager;
