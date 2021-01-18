import s from './FormControls.module.scss';

 const Element = Element =>({ input, meta, ...props }) =>{
    const hasError = meta.touched && meta.error;
    return (
        <div >
            <Element {...input} {...props} className={ (hasError ? s.error : "") }/>
            { hasError && <span className={s.errorSpan}> { meta.error } </span> }
        </div>
    );
};

export const InputField = Element("input");