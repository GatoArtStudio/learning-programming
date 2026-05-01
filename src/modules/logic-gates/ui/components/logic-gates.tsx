"use client"

import React, { useState} from "react";
import ButtonLogicBool from "@/modules/logic-gates/ui/components/button-logic-bool";
import ValueLogic from "@/modules/logic-gates/ui/components/value-logic";
import TabComponent from "@/modules/logic-gates/ui/components/tab-component";
import ContentTabComponent from "@/modules/logic-gates/ui/components/content-tab-component";
import ExpressionNegativeComponent from "@/modules/logic-gates/ui/components/expression-negative-component";

export default function LogicGates() {
    const [valueA, setValueA] = useState<boolean>(false);
    const [valueB, setValueB] = useState<boolean>(false);

    return (
        <div className="relative flex flex-col w-150">
            <h1 className="font-bold text-2xl text-center w-full py-5">
                Compuertas logicas
            </h1>

            <div className="w-full text-gray-300">
                <h2 className="font-bold text-xl py-3">
                    Símbolos del álgebra booleana
                </h2>
                <div className="flex flex-row gap-2 w-full">
                    <span className="font-bold bg-white/10 rounded-xl border border-white/30 px-4 py-1">
                        · AND &#34;Y&#34;
                    </span>
                    <span className="font-bold bg-white/10 rounded-xl border border-white/30 px-4 py-1">
                        + OR &#34;o&#34;
                    </span>
                    <span className="font-bold bg-white/10 rounded-xl border border-white/30 px-4 py-1">
                        <ExpressionNegativeComponent>
                            <span className="text-transparent">f</span>
                        </ExpressionNegativeComponent>
                        {" "}
                        NOT &#34;o&#34;
                    </span>
                    <span className="font-bold bg-white/10 rounded-xl border border-white/30 px-4 py-1">
                        ⊕ XOR &#34;diferente&#34;
                    </span>
                </div>
            </div>

            <div className="w-full text-gray-300">
                <h2 className="font-bold text-xl py-3">
                    Cambia las entradas
                </h2>
                <div
                    className="flex flex-row gap-5 items-center justify-start py-3"
                >
                    <div
                        className="flex flex-row gap-2 items-center justify-center"
                    >
                        <span>A</span>
                        <ButtonLogicBool value={valueA} setValue={setValueA} />
                    </div>
                    <div
                        className="flex flex-row gap-2 items-center justify-center"
                    >
                        <span>B</span>
                        <ButtonLogicBool value={valueB} setValue={setValueB} />
                    </div>
                </div>
            </div>

            <div className="w-full text-gray-300">
                <h2 className="font-bold text-xl py-3">
                    Resultado de cada expresión
                </h2>

                <p className="py-2">
                    En la siguiente tabla, &#34;S&#34; corresponde a la salida, entonces S tendra como valor el resultado de la expresión.
                </p>

                <TabComponent>
                    <ContentTabComponent>
                        <span className="flex-1">AND</span>
                        <span className="flex-1">S = A · B</span>
                        <ValueLogic value={valueA && valueB}/>
                    </ContentTabComponent>
                    <ContentTabComponent>
                        <span className="flex-1">OR</span>
                        <span className="flex-1">S = A + B</span>
                        <ValueLogic value={valueA || valueB}/>
                    </ContentTabComponent>
                    <ContentTabComponent>
                        <span className="flex-1">NOT A</span>
                        <span className="flex-1">
                            S = {" "}
                            <ExpressionNegativeComponent>
                                A
                            </ExpressionNegativeComponent>
                        </span>
                        <ValueLogic value={!valueA}/>
                    </ContentTabComponent>
                    <ContentTabComponent>
                        <span className="flex-1">NOT B</span>
                        <span className="flex-1">
                            S = {" "}
                            <ExpressionNegativeComponent>
                                B
                            </ExpressionNegativeComponent>
                        </span>
                        <ValueLogic value={!valueB}/>
                    </ContentTabComponent>
                    <ContentTabComponent>
                        <span className="flex-1">NAND</span>
                        <span className="flex-1">
                            S = {" "}
                            <ExpressionNegativeComponent>
                                A · B
                            </ExpressionNegativeComponent>
                        </span>
                        <ValueLogic value={!(valueA && valueB)}/>
                    </ContentTabComponent>
                    <ContentTabComponent>
                        <span className="flex-1">NOR</span>
                        <span className="flex-1">
                            S = {" "}
                            <ExpressionNegativeComponent>
                                A + B
                            </ExpressionNegativeComponent>
                        </span>
                        <ValueLogic value={!(valueA || valueB)}/>
                    </ContentTabComponent>
                    <ContentTabComponent>
                        <span className="flex-1">XOR</span>
                        <span className="flex-1">S = A ⊕ B</span>
                        <ValueLogic value={valueA !== valueB}/>
                    </ContentTabComponent>
                    <ContentTabComponent disableBar={true}>
                        <span className="flex-1">XNOR</span>
                        <span className="flex-1">
                            S = {" "}
                            <ExpressionNegativeComponent>
                                A ⊕ B
                            </ExpressionNegativeComponent>
                        </span>
                        <ValueLogic value={!(valueA !== valueB)}/>
                    </ContentTabComponent>
                </TabComponent>
            </div>
        </div>
    )
}