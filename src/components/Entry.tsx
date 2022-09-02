interface EntryProps {
    label: string
    type?: 'text' | 'number'
    value: any
    readonly?: boolean
    placeholder?: string
    className?: string
    onChange?: (value: any) => void
}

export default function Entry (props: EntryProps){
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-4">
                {props.label}
            </label>
            <input name="input" 
                placeholder={props.placeholder} 
                type={props.type ?? 'text'} 
                value={props.value} 
                readOnly={props.readonly}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.readonly ? '' : 'focus:bg-white'}
                `}
                onChange={e => props.onChange?.(e.target.value)}
            />
        </div>
    )
}