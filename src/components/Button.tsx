import React from 'react'

const buttonClasses = [
    { name: 'primary', class: 'btn-primary' },
    { name: 'secondary', class: 'btn-secondary' },
    { name: 'warning', class: 'btn-warning' },
    { name: 'disabled', class: 'btn-disabled' },
    { name: 'block', class: 'btn-block' },
    { name: '', class: '' },


];

export const Button = ({ buttonClass, buttonType, onClick, content, float, icon }: { buttonClass: string, buttonType: string, onClick: any, content: any, float: string, icon?: string }) => {
    const classProp = buttonClasses.find(item => { return item.name === buttonClass })?.class;
    const typeProp = buttonClasses.find(item => { return item.name === buttonType })?.class;
    return (
        <button className={'btn ' + classProp + ' ' + typeProp + ' btn-sm float-' + float} onClick={onClick}>
            {icon ? <i className={'fas fa-' + icon}></i> : ''}   {content}
        </button>

    )
}
