"use client";
import React, { useState } from "react";
import DevToggleV1 from "./dev-toggle-v1";

const DevToggleV1Usage = () => {
    const [check, setCheck] = useState(true)
    return (
        <div className="bg-LIGHT dark:bg-DARK p-3 rounded-lg flex gap-3">
            <DevToggleV1  labelName="Dev Switch" checked={check} onChange={(e) => setCheck(e.target.checked)} />
        </div>
    );
};

export default DevToggleV1Usage;
