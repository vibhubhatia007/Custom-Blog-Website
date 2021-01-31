
import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import imagex from "../resume.pdf";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




export default function edition1(){

    const toolbarPluginInstance = toolbarPlugin();
    const { Toolbar } = toolbarPluginInstance;

   
    const renderPage = (props) => {
        return (
            <>
                {props.canvasLayer.children}
                {props.annotationLayer.children}
            </>
        );
    };

    return (
        <main>
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                height: '70%',
                marginLeft: "10%",
                width: "80%",
                marginTop: "5%",
            
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    padding: '4px',
                    
                }}
            >
                <Toolbar>
                {
                    (props) => {
                        const {
                            EnterFullScreen, Download, Zoom, ZoomIn, ZoomOut,GoToPreviousPage,GoToNextPage,CurrentPageInput,
                        } = props;
                        return (
                            <>
                                <div style={{ padding: '0px 3px' }}>
                                    <ZoomOut />
                                </div>
                                <div style={{ padding: '0px 3px' }}>
                                    <Zoom />
                                </div>
                                <div style={{ padding: '0px 3px' }}>
                                    <ZoomIn />
                                </div>
                                <div style={{ padding: '0px 3px', }}>
                                <GoToPreviousPage />
                                </div>
                                 <div style={{ padding: '0px 3px' }}>
                                 </div>
                                <CurrentPageInput />
                                <div style={{ padding: '0px 3px' }}>
                                 <GoToNextPage />

                                </div>
                                <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                                    <EnterFullScreen />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <Download />
                                </div>
                            </>
                        )
                    }
                }
                </Toolbar>
            </div>
            <div
                style={{
                    overflowY: 'scroll',
                    width: '100%',
                    float: 'left',
                    height: '600px',
                    position:'relative'
                }}
            >
                <Viewer
                    fileUrl={imagex}
                    renderPage={renderPage}
                    plugins={[
                        toolbarPluginInstance,
                    ]}
                />
            </div>
            </div>
            <div style={{marginTop: '160px',}}>

            </div>

            </main>
       
);}
