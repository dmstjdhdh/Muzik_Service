import React, {useState} from 'react';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // Firebase 로그인 처리
            // Firebase의 인증 관련 메서드
            // firebase.auth().signInWithEmailAndPassword(email, password) 등
            // 성공하면 '/home'으로 리다이렉트
        } catch (error) {
            console.error('로그인 실패:', error.message);
        }
    }

    return (
        <div>
            <h2>로그인 페이지</h2>
            <form>
                <label>Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>로그인</button>
            </form>
        </div>
    );
};

export default LoginPage;