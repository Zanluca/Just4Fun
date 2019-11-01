import React from "react";
import {
    IonMenu,
    IonContent
} from '@ionic/react';

const MenuIonic = React.forwardRef((props, ref) => {
    return (
        <IonMenu ref={ref} contentId='main' side="start" menuId='menu1'>
            <IonContent>
                {props.children}
            </IonContent>
        </IonMenu>
    )
})

export default MenuIonic