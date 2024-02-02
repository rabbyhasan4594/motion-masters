

const SectionTitle = ({heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12  my-8 ">
            
            <h3 className="lg:text-3xl text-2xl uppercase border-4 text-white bg-slate-500 border-slate-600 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;