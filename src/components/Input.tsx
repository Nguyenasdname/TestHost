import { useState } from "react"
import axios from 'axios';

const Input = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScMuDttAFXjPJ10nHaBZg3kv1cLn4Q2oLA2vLB6hgrLeibEwA/formResponse';
        const formData = new FormData();
        formData.append('entry.1201941147', email); // thay bằng entry thực tế
        formData.append('entry.1579580496', name);  // thay bằng entry thực tế

        try {
            await axios.post(formUrl, formData);
            alert('Gửi thành công!');
        } catch (error) {
            console.error('Lỗi gửi form:', error);
        }
        window.location.reload()
    };

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    return (
        <form onSubmit={handleSubmit} >
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required/>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required/>
            <button type="submit"> Send ! </button>
        </form>
    )
}

export default Input