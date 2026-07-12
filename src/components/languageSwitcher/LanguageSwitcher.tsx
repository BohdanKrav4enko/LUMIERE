import {useTranslation} from "react-i18next";
import * as S from "./styles/LanguageSwitcherStyle";
import {useState} from "react";


export const LanguageSwitcher = () => {

    const {i18n} = useTranslation();

    const [open,setOpen] = useState(false);


    const languages = [
        {
            code:"en",
            label:"EN"
        },
        {
            code:"ru",
            label:"RU"
        },
        {
            code:"uk",
            label:"UA"
        }
    ];


    const current = languages.find(
        lang => lang.code === i18n.language
    );


    return (

        <S.Wrapper>

            <S.Current
                onClick={()=>setOpen(!open)}
            >
                {current?.label}
                <span>⌄</span>
            </S.Current>


            {
                open && (

                    <S.Dropdown>

                        {
                            languages
                                .filter(
                                    lang=>lang.code !== i18n.language
                                )
                                .map(lang=>(

                                    <S.Item
                                        key={lang.code}
                                        onClick={()=>{

                                            i18n.changeLanguage(lang.code);
                                            setOpen(false);

                                        }}
                                    >
                                        {lang.label}
                                    </S.Item>

                                ))
                        }

                    </S.Dropdown>

                )
            }

        </S.Wrapper>

    );
};