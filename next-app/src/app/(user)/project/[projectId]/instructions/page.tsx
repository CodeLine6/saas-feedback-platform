import CopyButton from "@/components/CopyButton"

const page = ({params} : {
    params: {
        projectId: string
    }
}) => {

  if(!params.projectId) return <div>Invalid Project ID</div>
  if(!process.env.WIDGET_URL) return <div>Missing WIDGET_URL</div>
  return (
    <div>
        <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
        <p className="text-lg text-secondary-foreground">Embed the code in your site</p>
        <div className="mt-6 bg-blue-950 p-6 rounded-md relative">
        <code className="text-white">
            {`<my-widget project-id="${params.projectId}"></my-widget>`}
            <br/>
            {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
        <CopyButton text={`${`<my-widget project-id="${params.projectId}"></my-widget>`}\n${`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}`} />
        </div>
        
    </div>
  )
}

export default page