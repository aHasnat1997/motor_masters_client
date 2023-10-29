/**
 * Button component for this website.
 * @prop {String} title button title.
 * @prop {String} btnStyle button style.
 * @prop {String} bgHover button hover background color.
 * @prop {*} rest button rest attributes.
 * @returns {JSX.Element} Button
 */
export default function Button({
    title = 'Button',
    btnStyle = 'btn-primary px-6 py-3',
    bgHover = 'bg-secondary',
    ...rest
}) {
    return <button
        className={`overflow-hidden relative group ${btnStyle}`}
        {...rest}
    >
        <div className={`w-20 h-60 absolute -bottom-4 -left-24 duration-700 origin-bottom-right opacity-0 group-hover:opacity-100 group-hover:rotate-90 
        ${bgHover}`} />
        <div className={`w-20 h-60 absolute -bottom-4 -right-24 duration-700 origin-bottom-left opacity-0 group-hover:opacity-100 group-hover:-rotate-90 
        ${bgHover}`} />
        <div className="relative z-20">
            {title}
        </div>
    </button>
}