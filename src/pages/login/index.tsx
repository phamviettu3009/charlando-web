import "./login.scss";
import {
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import useLogin from "hooks/useLogin";
import { Controller } from "react-hook-form";
import Waves from "components/Wave";
import IF from "components/IF";
import Button from "components/Button";

function LoginPage() {
    const {
        control,
        showPassword,
        handleShowPassword,
        handleLogin,
        message,
        isLogin,
    } = useLogin();

    return (
        <div className="login-page">
            <div className="login-page-form">
                <div className="login-page-form__inner">
                    <img
                        className="login-page-form__logo"
                        src="./src/assets/logo192.png"
                        alt=""
                    />

                    <span className="login-page-form__title">Đăng nhập</span>

                    <FormControl
                        size="small"
                        sx={{ m: 1, width: "25ch" }}
                        variant="standard"
                    >
                        <InputLabel htmlFor="standard-adornment-email">
                            Email
                        </InputLabel>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="standard-adornment-email"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <MailOutlinedIcon fontSize="small" />
                                        </InputAdornment>
                                    }
                                />
                            )}
                        />
                    </FormControl>

                    <FormControl
                        size="small"
                        sx={{ m: 1, width: "25ch" }}
                        variant="standard"
                    >
                        <InputLabel htmlFor="standard-adornment-password">
                            Mật khẩu
                        </InputLabel>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="standard-adornment-password"
                                    type={showPassword ? "text" : "password"}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <LockOutlinedIcon fontSize="small" />
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleShowPassword}
                                            >
                                                {showPassword ? (
                                                    <VisibilityOffOutlinedIcon />
                                                ) : (
                                                    <VisibilityOutlinedIcon />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            )}
                        />
                    </FormControl>

                    <Button
                        className="mt-3"
                        fullWidth
                        variant="contained"
                        size="small"
                        onClick={handleLogin}
                        isLoading={isLogin}
                    >
                        Đăng nhập
                    </Button>

                    <span className="login-page-form__label mt-3">
                        Bạn không có tài khoản?
                        <span className="login-page-form__label login-page-form__label--link ms-1">
                            Đăng ký
                        </span>
                    </span>

                    <span className="login-page-form__label login-page-form__label--link mt-3">
                        Quên mật khẩu?
                    </span>

                    <span className="login-page-form__label mt-3 mb-3">
                        Phiên bản ứng dụng 1.0.7
                    </span>

                    <IF condition={message}>
                        <span className="login-page-form__label login-page-form__label--error">
                            {message}
                        </span>
                    </IF>
                </div>

                <Waves className="waves--medium" />
            </div>
        </div>
    );
}

export default LoginPage;
