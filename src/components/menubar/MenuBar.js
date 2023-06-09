import React from 'react'
import style from "./menuBar.module.css"
import { Tooltip } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description';
import BasicMenu from './Menu';

import { useRecoilState } from "recoil";
import { documentName } from '../recoil/Atom';
import {
    fileMenuItems,
    helpMenuItems,
    editMenuItems,
    viewMenuItems,
    insertMenuItems,
    formatMenuItems,
    extensionMenuItems
} from '../menuItems'



const MenuBar = () => {
    // const [docName, setDocName] = useState("Untitled Document")
    const [docName,setDocName]=useRecoilState(documentName)


    return (
        <div className={style.menuBarContainer}>
            <div className={style.menuBar}>
                <Tooltip title="Docs home">
                    <h1><DescriptionIcon sx={{ color: '#4285F4', fontSize: "3rem" }} /></h1>
                </Tooltip>

                <div className={style.menuBarContent}>
                    <div className={style.menuBarContentTop}>
                        <input type="text"
                            value={docName}
                            onChange={(e) => setDocName(e.target.value)} />
                       
                    </div>

                    <div className={style.menuBarContentBottom}>
                        <BasicMenu menuItems={fileMenuItems} label="File" className={style.file} />
                        <BasicMenu menuItems={editMenuItems} label="Edit" className={style.edit} />
                        <BasicMenu menuItems={viewMenuItems} label="View" className={style.view} />
                        <BasicMenu menuItems={insertMenuItems} label="Insert" className={style.insert} />
                        <BasicMenu menuItems={formatMenuItems} label="Format" className={style.format} />
                        <BasicMenu menuItems={extensionMenuItems} label="Extensions" className={style.extension} />
                        <BasicMenu menuItems={helpMenuItems} label="Help" className={style.help} />
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default MenuBar
