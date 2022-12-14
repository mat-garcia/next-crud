interface ButtonProps {
    children: any
    color?: 'green' | 'blue' | 'gray'
    className?: string
    onClick?: () => void
}
export default function Button(props: ButtonProps){
     const color = colorSwitch(props.color);

    function colorSwitch(color?:string){
        switch (color) {
            case 'green':
                return 'from-green-400 to-green-500'
                break;
            case 'blue':
                return 'from-blue-400 to-blue-500'
                break;
            case 'gray':
                return 'from-gray-400 to-gray-500'
                break;
        
            default:
                return 'from-gray-400 to-gray-500'
                break;
        }

    }
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r ${color} text-white px-4 py-2 rounded-md
            ${props.className}
       
       `}>
            {props.children}
        </button>
    )
}