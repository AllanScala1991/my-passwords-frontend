import { Pane, Spinner } from "evergreen-ui";

export function Loading() {
    return (
        <div style={{
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                width: "100%", 
                height: "100vh",
                position: "absolute",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.2)",
                zIndex: "999",
            }}>
            <Pane>
                <Spinner/>
            </Pane>
        </div>
    )
}