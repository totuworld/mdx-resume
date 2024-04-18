function TitleWithPeriod({ title, period, titleSize = 'text-lg' }: { title: string; titleSize?: string; period: string }) {
    return (
        <div className="flex align-middle mt-6">
            <h3 className={`${titleSize} font-bold pt-0`}>{title}</h3>
            <span className="grow" />
            <p className="period">{period}</p>
        </div>
    );
}

export default TitleWithPeriod;