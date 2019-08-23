import React, { PureComponent } from 'react';
import styles from './styles.module.scss';
import { resetApprove, resetPassword } from '../../../services/auth';
import validateAuth from '../../../validation/auth';

class ResetPassword extends PureComponent {
    state = {
        success: false,
        status: null,
        password: null,
        passwordConfirm: null,
        linkId: null
    }

    componentDidMount() {
        const params = new URLSearchParams(location.search);
        this.sendApprove(params.get('id'));
    }

    sendApprove = async (linkId) => {
        const { status } = await resetApprove(linkId);
        this.setState({
            status,
            linkId
        });
    }

    sendReset = async () => {
        const { linkId, password, passwordConfirm } = this.state;
        
        if (password && passwordConfirm) {
            const { status } = await resetPassword({ linkId, password, passwordConfirm });
            this.setState({
                status,
                success: (status < 300)
            });
        } else {
            console.log('enter passwords');
        }


    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        const { status, success } = this.state;
        const {
            input,
            btn,
            form,
            row,
            rowFlexEnd,
            wrapperF
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
                        />
                        </div>
                        <div className={`${row} ${rowFlexEnd}`}>
                            <button type='button' className={btn} onClick={this.sendReset} >Push</button>
                        </div>
                    </form>)}
                {(status) && (!success) && (status > 300) && (<div>Something is wrong</div>)}
                {(!status) && (!success) && (<div>Checking link</div>)}
                {(success) && (<div>Password is Updated</div>)}
            </div>
        );
    }
}

export default ResetPassword;