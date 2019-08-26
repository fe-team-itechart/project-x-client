import React, { PureComponent } from 'react';
import styles from './styles.module.scss';
import { resetApprove, resetPassword } from '../../../services/auth';
import Spinner from '../../../components/spinner/index';
import validateAuth from '../../../validation/auth';

class ResetPassword extends PureComponent {
    state = {
        success: false,
        status: null,
        password: null,
        passwordConfirm: null,
        linkId: null,
        message: null
    }

    componentDidMount() {
        const params = new URLSearchParams(location.search);
        this.sendApprove(params.get('id'));
    }

    sendApprove = async (linkId) => {
        const { status, data } = await resetApprove(linkId);
        if (data.name === 'Error') {
            this.setState({
                status: 400,
                linkId: null,
            });
        } else {
            this.setState({
                status,
                linkId
            });
        }
    }

    sendReset = async (e) => {
        e.preventDefault();
        const { linkId, password, passwordConfirm } = this.state;
        const errors = validateAuth({ password });
        if (password && passwordConfirm) {
            if (password === passwordConfirm) {
                if (errors.password) {
                    this.setState({
                        message: errors.password
                    });
                } else {
                    const { status, data } = await resetPassword({ linkId, password, passwordConfirm });
                    if (data.status === 200) {
                        this.setState({
                            status,
                            success: (status < 300)
                        });
                    } else {
                        this.setState({
                            message: data.message
                        });
                    }
                }
            } else {
                this.setState({
                    message: 'Passwords not equal'
                });
            }
        } else {
            this.setState({
                message: 'Enter password'
            });
        }


    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        const { status, success, message } = this.state;
        const {
            input,
            btn,
            form,
            row,
            rowFlexEnd,
            wrapperF,
            errorMessage,
            successMessage,
            big_size_message,
        } = styles;

        return (
            <div className={wrapperF}>
                {(status) && (status < 300) && (!success) &&
                    (<form
                        name="resetPasswordForm"
                        className={form}
                    >
                        <div className={row}>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder='Enter Password'
                                onChange={this.inputHandler}
                                className={input}
                                required
                            />
                        </div>
                        <div className={row}>
                            <input
                                type="password"
                                name="passwordConfirm"
                                id="passwordConfirm"
                                placeholder='Confirm Password'
                                onChange={this.inputHandler}
                                className={input}
                                required
                            />
                        </div>
                        <p className={`${errorMessage} `}>&nbsp;{!!message && message}</p>
                        <div className={`${row} ${rowFlexEnd}`}>
                            <button type='submit' className={btn} onClick={this.sendReset} >Push</button>
                        </div>

                    </form>)}
                {(status) && (!success) && (status > 300) && (<div className={`${big_size_message} ${errorMessage}`}>Something is wrong</div>)}
                {(!status) && (!success) && (<Spinner />)}
                {(success) && (<div className={`${big_size_message} ${successMessage}`}>Password is Updated</div>)}
            </div>
        );
    }
}

export default ResetPassword;