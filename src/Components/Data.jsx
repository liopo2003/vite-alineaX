
export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.D}</th>
            <th>{individualExcelData.E}</th>
            <th>{individualExcelData.F}</th>
            <th>{individualExcelData.P}</th>
            <th>{individualExcelData.Y}</th>
        </>
    )
}
export const Data = ({excelData}) => {
    return excelData.map((individualExcelData,index)=>(
        <tr key={index}>
            <IndividualData individualExcelData={individualExcelData}/>
        </tr>
                
    ))
}
