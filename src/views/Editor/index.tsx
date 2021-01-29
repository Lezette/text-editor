import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Logout from '../../components/Logout';
import Explorer from '../../components/Explorer';
import { MonacoEditor } from 'react-monaco-editor-ts';

const Editor: React.FC = () => {

    const [theme, setTheme] = useState<string>("light");
    // const [code, setCode] = useState<string>(".../ enter your code here");
    const [isEditorReady, setIsEditorReady] = useState(false);
    const options = { selectOnLineNumbers: true };

    const toggleTheme = () => {
        setTheme(theme === "light" ? "vs-dark" : "light");
    }

    const editorDidMount = (editor : any, monaco : any) => {
        console.log('editorDidMount', editor);
        editor.focus();
        setIsEditorReady(true);
      }
    const onChange = (newValue : any, e : any) => {
        console.log('onChange', newValue, e);
      }

    return (
        <div className="container">
            <Grid container>
                <Grid item xs={3}>
                    <Explorer />
                </Grid>
                <Grid container item xs={9}>
                    <Grid item xs={12} container spacing={2}>
                        <Grid item xs={4}>
                           <button>
                               Open Workspace
                           </button>
                        </Grid>
                        <Grid item xs={4}>
                        <button onClick={toggleTheme} disabled={!isEditorReady}>
                            Toggle theme
                        </button>
                        </Grid>
                        <Grid item xs={4}>
                            <Logout />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="editor-container">
                            <MonacoEditor
                                language="javascript"
                                theme={theme}
                                // value={code}
                                options={options}
                                onChange={onChange}
                                editorDidMount={editorDidMount}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Editor;