import React, { useState } from "react";
import Shiken from "../hook/Shiken";

const randomKey = () => {
    return Math.floor(Math.random() * 1000);
};
export default function Home() {
    const [list, index, add] = Shiken();
    const [text, settext] = useState("");
    const last = list.length;

    const handleChange = (e) => {
        e.preventDefault();
        settext(e.target.value);
    };

    return (
        <div style={{ margin: 40 }}>
            <p>学生一覧：[Huyen, Hoa, Hung, Long]</p>
            <form>
                <p>追加する名前を入力してください</p>
                <label>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <input
                    type="submit"
                    value="確定"
                    style={{ marginRight: 50 }}
                    onClick={(e) => add(text, e)}
                />
            </form>
            <p>追加する名前：{text}</p>

            <span>学生一覧：[</span>
            {list.map((item, i) => (
                <span key={randomKey()} style={{ width: 40 }}>
                    {last === i + 1 ? (
                        <span>{item}</span>
                    ) : (
                        <span>{item}, </span>
                    )}
                </span>
            ))}
            <span>]</span>
        </div>
    );
}