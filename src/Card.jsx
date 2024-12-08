function Card({
    className,
    onReadMore,
    title,
    pic,
    alt,
    text,
    linkText,
  }) {
    return (
      <div className={className}>
         <h4 className={`${className}__title`}>{title}</h4>
        <img 
          className={`${className}__pic`} 
          alt={alt} 
          src={pic} 
        />
        
        <p className={`${className}__text`}>{text}</p>
        
        <button 
          className={`${className}__link`} 
          onClick={onReadMore} 
          aria-label={`Read More about ${title}`}
        >
          {linkText || "View Songs"}
        </button>
      </div>
    );
  }
  
  export default Card;