type ToolActionType = { type: "collapse" | "remove" }
	| { type: "dropdown", routers: any[] }
	| { type: "chat", send: string }
type ToolAction = { action: ToolActionType, enable: boolean }
export type CommonCardHeader = { title: string, tools: ToolAction[] }

export let commonCardHeader: CommonCardHeader = {
	title: "Monthly Recap Report"
	, tools: [		
		{action:{type: "remove" },enable:false}
		,{ action: { type: "collapse" }, enable: true }				
		,{
			action: {
				type: "dropdown", routers: [
					{ title: "Action", router: "#" }
					, { title: "Another action", router: "#" }
					, { title: "Something else here", router: "#" }
					, { title: "-", router: "" }
					, { title: "Separated link", router: "#" }]
			}
			, enable: true
		}
	]
}




