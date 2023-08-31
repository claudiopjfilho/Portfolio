import { useState } from "react";

export default function ContactForm() {
  return (
    <div>
      <div className="flex flex-col gap-x-4 justify-around font-mono font-bold">
        <h2>Olá, como posso ajudar?</h2>

        <div>
          <div className="mb-2 block"></div>

          <input type="text" name="Assunto" id="" className="w-2/5 h-2/5" />
        </div>
        <div>
          <div className="mb-2 block"></div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2"></div>
        </div>
        <div className="w-full"></div>
        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
          Qual o seu e-mail?
        </div>
      </div>
    </div>
  );
}
