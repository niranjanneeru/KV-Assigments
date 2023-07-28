async function getProcessedData(url){
    try{
        let value = await downloadData(url);
        
    }catch(e){
        downloadFallbackData(url);
        // return processDataInWorker(value);
    }
    return processDataInWorker(value);
}